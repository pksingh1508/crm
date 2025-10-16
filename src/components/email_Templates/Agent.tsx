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

interface AgentEmailProps {
  agentName: string;
  companyName?: string;
  agentEmail?: string;
}

export const AgentEmail: React.FC<Readonly<AgentEmailProps>> = ({
  agentName,
  companyName,
  agentEmail
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
            background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
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
            Partner with EU Career Service
          </Heading>
          <Text
            style={{
              color: "#e9d5ff",
              margin: "15px 0 0 0",
              fontSize: "18px",
              fontWeight: "500"
            }}
          >
            Expand Your Business with European Opportunities
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
            Dear {agentName},
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
            Thank you for your interest in partnering with EU Career Service!
            We're excited to explore collaboration opportunities that can help
            grow your business and provide more opportunities for job seekers.
          </Text>

          {/* Partnership Benefits */}
          <Section
            style={{
              backgroundColor: "#faf5ff",
              borderRadius: "12px",
              padding: "30px",
              margin: "30px 0",
              border: "1px solid #e0e7ff"
            }}
          >
            <Heading
              as="h3"
              style={{
                color: "#7c3aed",
                margin: "0 0 20px 0",
                fontSize: "20px",
                fontWeight: "600",
                textAlign: "center" as const
              }}
            >
              🤝 Partnership Benefits
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
                    💰
                  </div>
                  <Text
                    style={{
                      color: "#374151",
                      fontSize: "14px",
                      fontWeight: "600",
                      margin: "0 0 8px 0"
                    }}
                  >
                    Competitive Commission
                  </Text>
                  <Text
                    style={{
                      color: "#6b7280",
                      fontSize: "12px",
                      margin: "0",
                      lineHeight: "1.5"
                    }}
                  >
                    Attractive commission rates on successful placements
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
                    Exclusive Access
                  </Text>
                  <Text
                    style={{
                      color: "#6b7280",
                      fontSize: "12px",
                      margin: "0",
                      lineHeight: "1.5"
                    }}
                  >
                    Priority access to premium job opportunities
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
                    🚀
                  </div>
                  <Text
                    style={{
                      color: "#374151",
                      fontSize: "14px",
                      fontWeight: "600",
                      margin: "0 0 8px 0"
                    }}
                  >
                    Marketing Support
                  </Text>
                  <Text
                    style={{
                      color: "#6b7280",
                      fontSize: "12px",
                      margin: "0",
                      lineHeight: "1.5"
                    }}
                  >
                    Co-branded materials and marketing assistance
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
                    📞
                  </div>
                  <Text
                    style={{
                      color: "#374151",
                      fontSize: "14px",
                      fontWeight: "600",
                      margin: "0 0 8px 0"
                    }}
                  >
                    Dedicated Support
                  </Text>
                  <Text
                    style={{
                      color: "#6b7280",
                      fontSize: "12px",
                      margin: "0",
                      lineHeight: "1.5"
                    }}
                  >
                    Personal account manager and 24/7 assistance
                  </Text>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Commission Structure */}
          <Section
            style={{
              background: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
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
              💰 Lucrative Commission Structure
            </Heading>
            <Text
              style={{
                color: "#d1fae5",
                fontSize: "16px",
                margin: "0 0 20px 0",
                lineHeight: "1.6"
              }}
            >
              Earn competitive commissions on every successful placement. Our
              transparent structure ensures you maximize your earnings.
            </Text>

            <Row>
              <Column style={{ width: "33.33%", padding: "0 5px" }}>
                <div
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "8px",
                    padding: "15px",
                    margin: "5px"
                  }}
                >
                  <Text
                    style={{
                      color: "#ffffff",
                      fontSize: "18px",
                      fontWeight: "bold",
                      margin: "0 0 5px 0"
                    }}
                  >
                    Bronze
                  </Text>
                  <Text
                    style={{
                      color: "#d1fae5",
                      fontSize: "14px",
                      margin: "0"
                    }}
                  >
                    15% Commission
                  </Text>
                </div>
              </Column>

              <Column style={{ width: "33.33%", padding: "0 5px" }}>
                <div
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "8px",
                    padding: "15px",
                    margin: "5px"
                  }}
                >
                  <Text
                    style={{
                      color: "#ffffff",
                      fontSize: "18px",
                      fontWeight: "bold",
                      margin: "0 0 5px 0"
                    }}
                  >
                    Silver
                  </Text>
                  <Text
                    style={{
                      color: "#d1fae5",
                      fontSize: "14px",
                      margin: "0"
                    }}
                  >
                    20% Commission
                  </Text>
                </div>
              </Column>

              <Column style={{ width: "33.33%", padding: "0 5px" }}>
                <div
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "8px",
                    padding: "15px",
                    margin: "5px"
                  }}
                >
                  <Text
                    style={{
                      color: "#ffffff",
                      fontSize: "18px",
                      fontWeight: "bold",
                      margin: "0 0 5px 0"
                    }}
                  >
                    Gold
                  </Text>
                  <Text
                    style={{
                      color: "#d1fae5",
                      fontSize: "14px",
                      margin: "0"
                    }}
                  >
                    25% Commission
                  </Text>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Partnership Advantages */}
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
              🌟 Why Partner with EU Career Service?
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
                        "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 15px auto",
                      fontSize: "24px"
                    }}
                  >
                    🌍
                  </div>
                  <Text
                    style={{
                      color: "#374151",
                      fontSize: "14px",
                      fontWeight: "600",
                      margin: "0 0 5px 0"
                    }}
                  >
                    EU Network
                  </Text>
                  <Text
                    style={{
                      color: "#6b7280",
                      fontSize: "12px",
                      margin: "0",
                      lineHeight: "1.4"
                    }}
                  >
                    Direct access to European employers and institutions
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
                    Streamlined visa and placement processes
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
                        "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 15px auto",
                      fontSize: "24px"
                    }}
                  >
                    📈
                  </div>
                  <Text
                    style={{
                      color: "#374151",
                      fontSize: "14px",
                      fontWeight: "600",
                      margin: "0 0 5px 0"
                    }}
                  >
                    Growth Potential
                  </Text>
                  <Text
                    style={{
                      color: "#6b7280",
                      fontSize: "12px",
                      margin: "0",
                      lineHeight: "1.4"
                    }}
                  >
                    Unlimited earning potential with our network
                  </Text>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Partnership Process */}
          <Section
            style={{
              backgroundColor: "#fefce8",
              border: "1px solid #fde047",
              borderRadius: "8px",
              padding: "25px",
              margin: "30px 0"
            }}
          >
            <Heading
              as="h4"
              style={{
                color: "#a16207",
                margin: "0 0 15px 0",
                fontSize: "18px",
                fontWeight: "600"
              }}
            >
              🤝 Partnership Process:
            </Heading>
            <Text
              style={{
                color: "#92400e",
                fontSize: "14px",
                lineHeight: "1.6",
                margin: "0 0 15px 0"
              }}
            >
              1. <strong>Initial Consultation:</strong> Discuss partnership
              opportunities and requirements
            </Text>
            <Text
              style={{
                color: "#92400e",
                fontSize: "14px",
                lineHeight: "1.6",
                margin: "0 0 15px 0"
              }}
            >
              2. <strong>Agreement Signing:</strong> Review and sign partnership
              agreement
            </Text>
            <Text
              style={{
                color: "#92400e",
                fontSize: "14px",
                lineHeight: "1.6",
                margin: "0 0 15px 0"
              }}
            >
              3. <strong>Training & Onboarding:</strong> Comprehensive training
              on our processes
            </Text>
            <Text
              style={{
                color: "#92400e",
                fontSize: "14px",
                lineHeight: "1.6",
                margin: "0"
              }}
            >
              4. <strong>Start Earning:</strong> Begin placing candidates and
              earning commissions
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
            Ready to take your recruitment business to the next level? Join our
            partner network and unlock European opportunities for your clients.
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
            📧 Email: partners@eucareerservice.com | 🌐 Website:
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

export default AgentEmail;
