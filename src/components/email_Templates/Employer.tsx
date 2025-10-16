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

interface EmployerEmailProps {
  employerName: string;
  companyName?: string;
  employerEmail?: string;
  industry?: string;
}

export const EmployerEmail: React.FC<Readonly<EmployerEmailProps>> = ({
  employerName,
  companyName,
  employerEmail,
  industry
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
            background: "linear-gradient(135deg, #dc2626 0%, #ef4444 100%)",
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
            Find Your Perfect European Talent
          </Heading>
          <Text
            style={{
              color: "#fecaca",
              margin: "15px 0 0 0",
              fontSize: "18px",
              fontWeight: "500"
            }}
          >
            Professional Recruitment & Immigration Services
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
            Dear {employerName},
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
            Thank you for your interest in EU Career Service! We're excited to
            help you find qualified professionals for your European operations
            and support your international hiring needs.
          </Text>

          {/* Services for Employers */}
          <Section
            style={{
              backgroundColor: "#fef2f2",
              borderRadius: "12px",
              padding: "30px",
              margin: "30px 0",
              border: "1px solid #fecaca"
            }}
          >
            <Heading
              as="h3"
              style={{
                color: "#dc2626",
                margin: "0 0 20px 0",
                fontSize: "20px",
                fontWeight: "600",
                textAlign: "center" as const
              }}
            >
              🏢 Our Services for Employers
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
                    🔍
                  </div>
                  <Text
                    style={{
                      color: "#374151",
                      fontSize: "14px",
                      fontWeight: "600",
                      margin: "0 0 8px 0"
                    }}
                  >
                    Talent Sourcing
                  </Text>
                  <Text
                    style={{
                      color: "#6b7280",
                      fontSize: "12px",
                      margin: "0",
                      lineHeight: "1.5"
                    }}
                  >
                    Access to pre-screened, qualified candidates across Europe
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
                    📋
                  </div>
                  <Text
                    style={{
                      color: "#374151",
                      fontSize: "14px",
                      fontWeight: "600",
                      margin: "0 0 8px 0"
                    }}
                  >
                    Immigration Support
                  </Text>
                  <Text
                    style={{
                      color: "#6b7280",
                      fontSize: "12px",
                      margin: "0",
                      lineHeight: "1.5"
                    }}
                  >
                    Complete work permit and visa assistance for international
                    hires
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
                    ⚡
                  </div>
                  <Text
                    style={{
                      color: "#374151",
                      fontSize: "14px",
                      fontWeight: "600",
                      margin: "0 0 8px 0"
                    }}
                  >
                    Fast Placement
                  </Text>
                  <Text
                    style={{
                      color: "#6b7280",
                      fontSize: "12px",
                      margin: "0",
                      lineHeight: "1.5"
                    }}
                  >
                    Quick turnaround from requirement to placement
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
                    🎯
                  </div>
                  <Text
                    style={{
                      color: "#374151",
                      fontSize: "14px",
                      fontWeight: "600",
                      margin: "0 0 8px 0"
                    }}
                  >
                    Quality Guarantee
                  </Text>
                  <Text
                    style={{
                      color: "#6b7280",
                      fontSize: "12px",
                      margin: "0",
                      lineHeight: "1.5"
                    }}
                  >
                    6-month replacement guarantee on all placements
                  </Text>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Pricing Section */}
          <Section
            style={{
              background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
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
              💼 Transparent Pricing Structure
            </Heading>
            <Text
              style={{
                color: "#dbeafe",
                fontSize: "16px",
                margin: "0 0 20px 0",
                lineHeight: "1.6"
              }}
            >
              Competitive rates with no hidden fees. Pay only for successful
              placements.
            </Text>

            <Row>
              <Column style={{ width: "50%", padding: "0 10px" }}>
                <div
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "8px",
                    padding: "20px",
                    margin: "10px"
                  }}
                >
                  <Text
                    style={{
                      color: "#ffffff",
                      fontSize: "18px",
                      fontWeight: "bold",
                      margin: "0 0 10px 0"
                    }}
                  >
                    Standard Placement
                  </Text>
                  <Text
                    style={{
                      color: "#dbeafe",
                      fontSize: "24px",
                      fontWeight: "bold",
                      margin: "0 0 10px 0"
                    }}
                  >
                    15% of Annual Salary
                  </Text>
                  <Text
                    style={{
                      color: "#bfdbfe",
                      fontSize: "12px",
                      margin: "0",
                      lineHeight: "1.4"
                    }}
                  >
                    • 6-month guarantee • Full immigration support • CV
                    screening included
                  </Text>
                </div>
              </Column>

              <Column style={{ width: "50%", padding: "0 10px" }}>
                <div
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "8px",
                    padding: "20px",
                    margin: "10px"
                  }}
                >
                  <Text
                    style={{
                      color: "#ffffff",
                      fontSize: "18px",
                      fontWeight: "bold",
                      margin: "0 0 10px 0"
                    }}
                  >
                    Executive Placement
                  </Text>
                  <Text
                    style={{
                      color: "#dbeafe",
                      fontSize: "24px",
                      fontWeight: "bold",
                      margin: "0 0 10px 0"
                    }}
                  >
                    20% of Annual Salary
                  </Text>
                  <Text
                    style={{
                      color: "#bfdbfe",
                      fontSize: "12px",
                      margin: "0",
                      lineHeight: "1.4"
                    }}
                  >
                    • Premium candidate search • Priority processing • Dedicated
                    account manager
                  </Text>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Why Choose Us */}
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
                        "linear-gradient(135deg, #dc2626 0%, #ef4444 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 15px auto",
                      fontSize: "24px"
                    }}
                  >
                    🎯
                  </div>
                  <Text
                    style={{
                      color: "#374151",
                      fontSize: "14px",
                      fontWeight: "600",
                      margin: "0 0 5px 0"
                    }}
                  >
                    Quality Candidates
                  </Text>
                  <Text
                    style={{
                      color: "#6b7280",
                      fontSize: "12px",
                      margin: "0",
                      lineHeight: "1.4"
                    }}
                  >
                    Pre-screened professionals ready for European roles
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
                    Streamlined recruitment and visa processes
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
                        "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 15px auto",
                      fontSize: "24px"
                    }}
                  >
                    🛡️
                  </div>
                  <Text
                    style={{
                      color: "#374151",
                      fontSize: "14px",
                      fontWeight: "600",
                      margin: "0 0 5px 0"
                    }}
                  >
                    Compliance Guaranteed
                  </Text>
                  <Text
                    style={{
                      color: "#6b7280",
                      fontSize: "12px",
                      margin: "0",
                      lineHeight: "1.4"
                    }}
                  >
                    Full compliance with EU labor and immigration laws
                  </Text>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Industries We Serve */}
          <Section
            style={{
              backgroundColor: "#f0f9ff",
              border: "1px solid #bae6fd",
              borderRadius: "8px",
              padding: "25px",
              margin: "30px 0"
            }}
          >
            <Heading
              as="h4"
              style={{
                color: "#0369a1",
                margin: "0 0 15px 0",
                fontSize: "18px",
                fontWeight: "600",
                textAlign: "center" as const
              }}
            >
              🏭 Industries We Serve:
            </Heading>
            <Row>
              <Column style={{ width: "33.33%", padding: "0 5px" }}>
                <Text
                  style={{
                    color: "#1e40af",
                    fontSize: "12px",
                    fontWeight: "600",
                    margin: "0 0 8px 0",
                    textAlign: "center" as const
                  }}
                >
                  💻 Technology
                </Text>
              </Column>
              <Column style={{ width: "33.33%", padding: "0 5px" }}>
                <Text
                  style={{
                    color: "#1e40af",
                    fontSize: "12px",
                    fontWeight: "600",
                    margin: "0 0 8px 0",
                    textAlign: "center" as const
                  }}
                >
                  🏥 Healthcare
                </Text>
              </Column>
              <Column style={{ width: "33.33%", padding: "0 5px" }}>
                <Text
                  style={{
                    color: "#1e40af",
                    fontSize: "12px",
                    fontWeight: "600",
                    margin: "0 0 8px 0",
                    textAlign: "center" as const
                  }}
                >
                  ⚙️ Engineering
                </Text>
              </Column>
            </Row>
            <Row>
              <Column style={{ width: "33.33%", padding: "0 5px" }}>
                <Text
                  style={{
                    color: "#1e40af",
                    fontSize: "12px",
                    fontWeight: "600",
                    margin: "0 0 8px 0",
                    textAlign: "center" as const
                  }}
                >
                  💰 Finance
                </Text>
              </Column>
              <Column style={{ width: "33.33%", padding: "0 5px" }}>
                <Text
                  style={{
                    color: "#1e40af",
                    fontSize: "12px",
                    fontWeight: "600",
                    margin: "0 0 8px 0",
                    textAlign: "center" as const
                  }}
                >
                  🎓 Education
                </Text>
              </Column>
              <Column style={{ width: "33.33%", padding: "0 5px" }}>
                <Text
                  style={{
                    color: "#1e40af",
                    fontSize: "12px",
                    fontWeight: "600",
                    margin: "0 0 8px 0",
                    textAlign: "center" as const
                  }}
                >
                  + More
                </Text>
              </Column>
            </Row>
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
            Ready to build your European team? Let's discuss your hiring needs
            and find the perfect candidates for your organization.
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
            <strong>EU Career Service</strong> - Your Gateway to European Talent
          </Text>
          <Text
            style={{
              color: "#6b7280",
              fontSize: "12px",
              margin: "0 0 10px 0"
            }}
          >
            📧 Email: employers@eucareerservice.com | 🌐 Website:
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

export default EmployerEmail;
