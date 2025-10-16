import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";
import AgentEmail from "@/components/email_Templates/Agent";
import EmployerEmail from "@/components/email_Templates/Employer";
import JobSeekerEmail from "@/components/email_Templates/JobSeeker";

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    // extract the data from the request
    const body = await req.json();
    const { email, template_id, id, name } = body;
    // choose the template using template id
    let template;
    switch (template_id) {
      case 1:
        template = <EmployerEmail employerName={name} />;
        break;
      case 2:
        template = <AgentEmail agentName={name} />;
        break;
      case 3:
        template = <JobSeekerEmail userName={name} />;
        break;
      default:
        return new Response(JSON.stringify({ error: "Invalid template ID" }), {
          status: 400
        });
    }
    // send the email using resend
    const { data, error } = await resend.emails.send({
      from: "ashutosh@eucareerserwis.pl",
      to: [email],
      subject:
        "EU Career Serwis Offers expert assistance in your Work Permit Application",
      react: template
    });

    if (error) {
      console.error("Resend Error:", error);
      return new Response(JSON.stringify({ error }), { status: 500 });
    }
    // update the database with the email status with the id
    await supabase.from("contacts").update({ is_mailed: true }).eq("id", id);

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200
    });
  } catch (error: any) {
    console.error("Server Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500
    });
  }
}
