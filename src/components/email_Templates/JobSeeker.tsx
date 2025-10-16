import * as React from "react";
import {
  Html,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Img,
  Row,
  Column,
  Button,
  Hr
} from "@react-email/components";

interface JobSeekerEmailProps {
  userName: string;
  userEmail?: string;
}

export const JobSeekerEmail: React.FC<Readonly<JobSeekerEmailProps>> = ({
  userName,
  userEmail
}) => (
  <Html>
    <Body
      style={{
        fontFamily: "Arial, sans-serif",
        margin: 0,
        padding: 0,
        backgroundColor: "#f8fafc"
      }}
    >
      <Container
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
        }}
      >
        {/* Header */}
        <Section
          style={{
            background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
            padding: "40px 20px",
            textAlign: "center" as const
          }}
        >
          <Img
            src="https://ik.imagekit.io/eucareerserwis/Certificates/euLogo.jpeg"
            alt="EU Career Service Logo"
            style={{
              maxWidth: "120px",
              height: "auto",
              marginBottom: "20px",
              filter: "brightness(0) invert(1)"
            }}
          />
          <Heading
            as="h1"
            style={{
              color: "#ffffff",
              margin: "0",
              fontSize: "32px",
              fontWeight: "bold",
              letterSpacing: "1px"
            }}
          >
            Your European Dream Job Awaits
          </Heading>
          <Text
            style={{
              color: "#dbeafe",
              margin: "15px 0 0 0",
              fontSize: "18px",
              fontWeight: "500"
            }}
          >
            Professional Immigration & Career Services
          </Text>
        </Section>

        {/* Main Content */}
        <Section style={{ padding: "40px 30px", backgroundColor: "#ffffff" }}>
          <Heading
            as="h2"
            style={{
              color: "#1f2937",
              margin: "0 0 20px 0",
              fontSize: "24px",
              fontWeight: "600",
              textAlign: "center" as const
            }}
          >
            Dear {userName},
          </Heading>

          <Text
            style={{
              color: "#4b5563",
              fontSize: "16px",
              lineHeight: "1.7",
              margin: "0 0 25px 0",
              textAlign: "center" as const
            }}
          >
            Thank you for your interest in European career opportunities! We're
            excited to help you explore job possibilities across Europe with our
            comprehensive immigration and career services.
          </Text>

          {/* Services Section */}
          <Section
            style={{
              backgroundColor: "#f8fafc",
              borderRadius: "12px",
              padding: "30px",
              margin: "30px 0",
              border: "1px solid #e2e8f0"
            }}
          >
            <Heading
              as="h3"
              style={{
                color: "#1e40af",
                margin: "0 0 20px 0",
                fontSize: "20px",
                fontWeight: "600",
                textAlign: "center" as const
              }}
            >
              🚀 Our Services for Job Seekers
            </Heading>

            <Row>
              <Column style={{ width: "50%", padding: "0 10px" }}>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "8px",
                    padding: "20px",
                    textAlign: "center" as const,
                    border: "1px solid #e5e7eb"
                  }}
                >
                  <div style={{ fontSize: "32px", marginBottom: "10px" }}>
                    💼
                  </div>
                  <Text
                    style={{
                      color: "#374151",
                      fontSize: "14px",
                      fontWeight: "600",
                      margin: "0 0 8px 0"
                    }}
                  >
                    Job Placement
                  </Text>
                  <Text
                    style={{
                      color: "#6b7280",
                      fontSize: "12px",
                      margin: "0",
                      lineHeight: "1.5"
                    }}
                  >
                    Access to exclusive job opportunities across EU countries
                  </Text>
                </div>
              </Column>

              <Column style={{ width: "50%", padding: "0 10px" }}>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "8px",
                    padding: "20px",
                    textAlign: "center" as const,
                    border: "1px solid #e5e7eb"
                  }}
                >
                  <div style={{ fontSize: "32px", marginBottom: "10px" }}>
                    ✈️
                  </div>
                  <Text
                    style={{
                      color: "#374151",
                      fontSize: "14px",
                      fontWeight: "600",
                      margin: "0 0 8px 0"
                    }}
                  >
                    Visa Assistance
                  </Text>
                  <Text
                    style={{
                      color: "#6b7280",
                      fontSize: "12px",
                      margin: "0",
                      lineHeight: "1.5"
                    }}
                  >
                    Complete visa application support and guidance
                  </Text>
                </div>
              </Column>
            </Row>

            <Row style={{ marginTop: "20px" }}>
              <Column style={{ width: "50%", padding: "0 10px" }}>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "8px",
                    padding: "20px",
                    textAlign: "center" as const,
                    border: "1px solid #e5e7eb"
                  }}
                >
                  <div style={{ fontSize: "32px", marginBottom: "10px" }}>
                    🏠
                  </div>
                  <Text
                    style={{
                      color: "#374151",
                      fontSize: "14px",
                      fontWeight: "600",
                      margin: "0 0 8px 0"
                    }}
                  >
                    Relocation Support
                  </Text>
                  <Text
                    style={{
                      color: "#6b7280",
                      fontSize: "12px",
                      margin: "0",
                      lineHeight: "1.5"
                    }}
                  >
                    Housing, banking, and settlement assistance
                  </Text>
                </div>
              </Column>

              <Column style={{ width: "50%", padding: "0 10px" }}>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "8px",
                    padding: "20px",
                    textAlign: "center" as const,
                    border: "1px solid #e5e7eb"
                  }}
                >
                  <div style={{ fontSize: "32px", marginBottom: "10px" }}>
                    🎓
                  </div>
                  <Text
                    style={{
                      color: "#374151",
                      fontSize: "14px",
                      fontWeight: "600",
                      margin: "0 0 8px 0"
                    }}
                  >
                    Career Guidance
                  </Text>
                  <Text
                    style={{
                      color: "#6b7280",
                      fontSize: "12px",
                      margin: "0",
                      lineHeight: "1.5"
                    }}
                  >
                    CV optimization and interview preparation
                  </Text>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Call to Action */}
          <Section
            style={{
              background: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)",
              borderRadius: "12px",
              padding: "30px",
              textAlign: "center" as const,
              margin: "30px 0"
            }}
          >
            <Heading
              as="h3"
              style={{
                color: "#ffffff",
                margin: "0 0 15px 0",
                fontSize: "22px",
                fontWeight: "bold"
              }}
            >
              Ready to Start Your European Journey?
            </Heading>
            <Text
              style={{
                color: "#fef3c7",
                fontSize: "16px",
                margin: "0 0 25px 0",
                lineHeight: "1.6"
              }}
            >
              Take the first step towards your dream career in Europe. Our
              expert team is ready to guide you through every step of the
              process.
            </Text>
            <Button
              href={`mailto:info@eucareerservice.com?subject=Job Seeker Inquiry from ${userName}`}
              style={{
                backgroundColor: "#ffffff",
                color: "#f97316",
                padding: "12px 30px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "bold",
                textDecoration: "none",
                display: "inline-block",
                margin: "0"
              }}
            >
              📧 Contact Our Experts
            </Button>
          </Section>

          {/* Benefits Section */}
          <Section style={{ margin: "30px 0" }}>
            <Heading
              as="h3"
              style={{
                color: "#1f2937",
                margin: "0 0 20px 0",
                fontSize: "20px",
                fontWeight: "600",
                textAlign: "center" as const
              }}
            >
              🌟 Why Choose EU Career Service?
            </Heading>

            <Row>
              <Column style={{ width: "33.33%", padding: "0 10px" }}>
                <div style={{ textAlign: "center" as const }}>
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 15px auto",
                      fontSize: "24px"
                    }}
                  >
                    ⚡
                  </div>
                  <Text
                    style={{
                      color: "#374151",
                      fontSize: "14px",
                      fontWeight: "600",
                      margin: "0 0 5px 0"
                    }}
                  >
                    Fast Processing
                  </Text>
                  <Text
                    style={{
                      color: "#6b7280",
                      fontSize: "12px",
                      margin: "0",
                      lineHeight: "1.4"
                    }}
                  >
                    Quick visa processing and job matching
                  </Text>
                </div>
              </Column>

              <Column style={{ width: "33.33%", padding: "0 10px" }}>
                <div style={{ textAlign: "center" as const }}>
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 15px auto",
                      fontSize: "24px"
                    }}
                  >
                    🏆
                  </div>
                  <Text
                    style={{
                      color: "#374151",
                      fontSize: "14px",
                      fontWeight: "600",
                      margin: "0 0 5px 0"
                    }}
                  >
                    Expert Support
                  </Text>
                  <Text
                    style={{
                      color: "#6b7280",
                      fontSize: "12px",
                      margin: "0",
                      lineHeight: "1.4"
                    }}
                  >
                    Professional guidance throughout your journey
                  </Text>
                </div>
              </Column>

              <Column style={{ width: "33.33%", padding: "0 10px" }}>
                <div style={{ textAlign: "center" as const }}>
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 15px auto",
                      fontSize: "24px"
                    }}
                  >
                    💯
                  </div>
                  <Text
                    style={{
                      color: "#374151",
                      fontSize: "14px",
                      fontWeight: "600",
                      margin: "0 0 5px 0"
                    }}
                  >
                    100% Success Rate
                  </Text>
                  <Text
                    style={{
                      color: "#6b7280",
                      fontSize: "12px",
                      margin: "0",
                      lineHeight: "1.4"
                    }}
                  >
                    Proven track record with satisfied clients
                  </Text>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Next Steps */}
          <Section
            style={{
              backgroundColor: "#eff6ff",
              border: "1px solid #bfdbfe",
              borderRadius: "8px",
              padding: "25px",
              margin: "30px 0"
            }}
          >
            <Heading
              as="h4"
              style={{
                color: "#1e40af",
                margin: "0 0 15px 0",
                fontSize: "18px",
                fontWeight: "600"
              }}
            >
              📋 Next Steps:
            </Heading>
            <Text
              style={{
                color: "#1f2937",
                fontSize: "14px",
                lineHeight: "1.6",
                margin: "0 0 15px 0"
              }}
            >
              1. <strong>Schedule Consultation:</strong> Book a free
              consultation with our immigration experts
            </Text>
            <Text
              style={{
                color: "#1f2937",
                fontSize: "14px",
                lineHeight: "1.6",
                margin: "0 0 15px 0"
              }}
            >
              2. <strong>Document Assessment:</strong> We'll review your
              qualifications and preferences
            </Text>
            <Text
              style={{
                color: "#1f2937",
                fontSize: "14px",
                lineHeight: "1.6",
                margin: "0 0 15px 0"
              }}
            >
              3. <strong>Job Matching:</strong> Find suitable positions based on
              your profile
            </Text>
            <Text
              style={{
                color: "#1f2937",
                fontSize: "14px",
                lineHeight: "1.6",
                margin: "0"
              }}
            >
              4. <strong>Visa Application:</strong> Complete support through the
              visa process
            </Text>
          </Section>

          <Hr
            style={{
              border: "none",
              borderTop: "2px solid #e5e7eb",
              margin: "30px 0"
            }}
          />

          <Text
            style={{
              color: "#4b5563",
              fontSize: "16px",
              lineHeight: "1.6",
              margin: "0 0 20px 0",
              textAlign: "center" as const
            }}
          >
            Ready to turn your European dream into reality? Contact us today and
            let's start your journey!
          </Text>
        </Section>

        {/* Footer */}
        <Section
          style={{
            backgroundColor: "#1f2937",
            padding: "30px",
            textAlign: "center" as const
          }}
        >
          <Text
            style={{
              color: "#9ca3af",
              fontSize: "14px",
              margin: "0 0 10px 0"
            }}
          >
            <strong>EU Career Service</strong> - Your Gateway to European
            Opportunities
          </Text>
          <Text
            style={{
              color: "#6b7280",
              fontSize: "12px",
              margin: "0 0 10px 0"
            }}
          >
            📧 Email: info@eucareerservice.com | 🌐 Website:
            www.eucareerservice.com
          </Text>
          <Text
            style={{
              color: "#6b7280",
              fontSize: "12px",
              margin: "0 0 10px 0"
            }}
          >
            📞 Phone: +48 123 456 789 | 📍 Warsaw, Poland
          </Text>
          <Text
            style={{
              color: "#9ca3af",
              fontSize: "11px",
              margin: "0"
            }}
          >
            © 2025 EU Career Service. All rights reserved. | Licensed
            Immigration Consultancy
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default JobSeekerEmail;
