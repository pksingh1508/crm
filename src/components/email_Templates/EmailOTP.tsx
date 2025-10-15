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
  Column
} from "@react-email/components";

interface EmailOTPProps {
  OTP: string;
  userName?: string;
  adminName?: string;
  loginTime?: string;
  ipAddress?: string;
  userAgent?: string;
  expiryMinutes?: number;
}

export const EmailOTP: React.FC<Readonly<EmailOTPProps>> = ({
  OTP,
  userName = "Team Member",
  adminName = "Admin",
  loginTime = new Date().toLocaleString(),
  ipAddress = "Unknown",
  userAgent = "Unknown Browser",
  expiryMinutes = 5
}) => (
  <Html>
    <Body style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
      <Container
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          overflow: "hidden"
        }}
      >
        {/* Header */}
        <Section
          style={{
            backgroundColor: "#dc2626",
            padding: "30px 20px",
            textAlign: "center"
          }}
        >
          <Img
            src="https://ik.imagekit.io/eucareerserwis/Certificates/euLogo.jpeg"
            alt="EU CRM Logo"
            style={{
              maxWidth: "150px",
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
              fontSize: "28px",
              fontWeight: "bold",
              letterSpacing: "1px"
            }}
          >
            🔐 SECURITY ALERT
          </Heading>
          <Text
            style={{
              color: "#fecaca",
              margin: "10px 0 0 0",
              fontSize: "16px"
            }}
          >
            EU CRM - Login Authorization Required
          </Text>
        </Section>

        {/* Body */}
        <Section style={{ padding: "40px 30px", backgroundColor: "#ffffff" }}>
          <Heading
            as="h2"
            style={{
              color: "#1f2937",
              margin: "0 0 20px 0",
              fontSize: "24px",
              fontWeight: "600"
            }}
          >
            Hello {adminName},
          </Heading>

          <Section
            style={{
              backgroundColor: "#fef2f2",
              border: "1px solid #fecaca",
              borderRadius: "6px",
              padding: "20px",
              margin: "20px 0"
            }}
          >
            <Heading
              as="h3"
              style={{
                color: "#dc2626",
                margin: "0 0 15px 0",
                fontSize: "18px",
                fontWeight: "600"
              }}
            >
              🚨 Login Attempt Detected
            </Heading>
            <Text
              style={{
                color: "#7f1d1d",
                fontSize: "16px",
                margin: "0 0 10px 0",
                lineHeight: "1.6"
              }}
            >
              <strong>{userName}</strong> is attempting to access the EU CRM
              system and requires your authorization.
            </Text>
          </Section>

          {/* Login Details */}
          <Section
            style={{
              backgroundColor: "#f9fafb",
              border: "1px solid #d1d5db",
              borderRadius: "6px",
              padding: "20px",
              margin: "20px 0"
            }}
          >
            <Heading
              as="h4"
              style={{
                color: "#374151",
                margin: "0 0 15px 0",
                fontSize: "16px",
                fontWeight: "600"
              }}
            >
              📋 Login Details:
            </Heading>
            <Section style={{ marginTop: "10px" }}>
              <Row>
                <Column
                  style={{
                    padding: "8px 0",
                    color: "#6b7280",
                    fontSize: "14px",
                    fontWeight: "500",
                    width: "120px"
                  }}
                >
                  👤 User:
                </Column>
                <Column
                  style={{
                    padding: "8px 0",
                    color: "#1f2937",
                    fontSize: "14px"
                  }}
                >
                  {userName}
                </Column>
              </Row>
              <Row>
                <Column
                  style={{
                    padding: "8px 0",
                    color: "#6b7280",
                    fontSize: "14px",
                    fontWeight: "500"
                  }}
                >
                  🕒 Time:
                </Column>
                <Column
                  style={{
                    padding: "8px 0",
                    color: "#1f2937",
                    fontSize: "14px"
                  }}
                >
                  {loginTime}
                </Column>
              </Row>
              <Row>
                <Column
                  style={{
                    padding: "8px 0",
                    color: "#6b7280",
                    fontSize: "14px",
                    fontWeight: "500"
                  }}
                >
                  🌐 IP Address:
                </Column>
                <Column
                  style={{
                    padding: "8px 0",
                    color: "#1f2937",
                    fontSize: "14px"
                  }}
                >
                  {ipAddress}
                </Column>
              </Row>
              <Row>
                <Column
                  style={{
                    padding: "8px 0",
                    color: "#6b7280",
                    fontSize: "14px",
                    fontWeight: "500"
                  }}
                >
                  💻 Browser:
                </Column>
                <Column
                  style={{
                    padding: "8px 0",
                    color: "#1f2937",
                    fontSize: "14px"
                  }}
                >
                  {userAgent}
                </Column>
              </Row>
            </Section>
          </Section>

          {/* OTP Box */}
          <Section
            style={{
              backgroundColor: "#f8fafc",
              border: "2px solid #dc2626",
              borderRadius: "8px",
              padding: "30px",
              textAlign: "center",
              margin: "30px 0"
            }}
          >
            <Text
              style={{
                color: "#64748b",
                fontSize: "14px",
                margin: "0 0 10px 0",
                textTransform: "uppercase",
                letterSpacing: "1px"
              }}
            >
              Authorization Code
            </Text>
            <Text
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                color: "#dc2626",
                letterSpacing: "4px",
                fontFamily: "monospace"
              }}
            >
              {OTP}
            </Text>
          </Section>

          <Section
            style={{
              backgroundColor: "#fee2e2",
              border: "1px solid #fca5a5",
              borderRadius: "6px",
              padding: "20px",
              margin: "20px 0"
            }}
          >
            <Text
              style={{
                color: "#991b1b",
                fontSize: "14px",
                margin: "0",
                fontWeight: "500"
              }}
            >
              ⚠️ This authorization code will expire in {expiryMinutes} minutes
              for security reasons.
            </Text>
          </Section>

          <Text
            style={{
              color: "#4b5563",
              fontSize: "16px",
              lineHeight: "1.6",
              margin: "0 0 10px 0"
            }}
          >
            To approve this login attempt, please provide this authorization
            code to <strong>{userName}</strong> or enter it in the admin panel
            if you have access.
          </Text>

          <Text
            style={{
              color: "#4b5563",
              fontSize: "16px",
              lineHeight: "1.6",
              margin: "0 0 20px 0"
            }}
          >
            If you did not initiate this login request or suspect unauthorized
            access, please investigate immediately and contact your security
            team.
          </Text>

          <Section
            style={{
              backgroundColor: "#eff6ff",
              border: "1px solid #bfdbfe",
              borderRadius: "6px",
              padding: "15px",
              margin: "20px 0"
            }}
          >
            <Text
              style={{
                color: "#1e40af",
                fontSize: "14px",
                margin: "0",
                fontWeight: "500"
              }}
            >
              💡 <strong>Security Note:</strong> This is an automated security
              measure to ensure only authorized personnel can access the EU CRM
              system.
            </Text>
          </Section>
        </Section>

        {/* Footer */}
        <Section
          style={{
            backgroundColor: "#f9fafb",
            padding: "30px",
            borderTop: "1px solid #e5e7eb",
            textAlign: "center"
          }}
        >
          <Text
            style={{
              color: "#6b7280",
              fontSize: "14px",
              margin: "0 0 10px 0"
            }}
          >
            <strong>EU CRM</strong> - Internal Security System
          </Text>
          <Text
            style={{
              color: "#9ca3af",
              fontSize: "12px",
              margin: "0 0 10px 0"
            }}
          >
            This is an automated security alert, please do not reply to this
            email.
          </Text>
          <Text
            style={{
              color: "#9ca3af",
              fontSize: "12px",
              margin: "0"
            }}
          >
            © 2025 EU CRM. All rights reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default EmailOTP;
