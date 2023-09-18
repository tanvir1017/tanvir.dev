import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

export const SlackConfirmEmail = ({ name, subject, message }) => (
  <Html>
    <Head />
    <Preview>Confirm your email address</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={{ marginTop: "35px" }}>
          <Img
            src="https://res.cloudinary.com/djbcnjkin/image/upload/v1695030251/mqmasrrhqj5ug8bg3hmz.png"
            width="50"
            height="50"
            alt="Slack"
            style={{ borderRadius: "50px" }}
          />
          <Section style={{ color: "black" }}>
            <Heading
              level={4}
              style={{
                marginTop: "10px",
                marginBottom: "-20px",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              Tanvir Hossain
            </Heading>{" "}
            <Text>Front-end Developer</Text>
          </Section>{" "}
        </Section>
        <Heading level={4} style={h1}>
          Hey! {name} 👋
        </Heading>{" "}
        <Text style={{ color: "gray", fontSize: "22px", fontWeight: "200" }}>
          It's me Tanvir Hossain. I just got your e-mail. Thanks a billion for
          showing interest to talk to me 💖
        </Text>
        <Text style={heroText}>You wanted to discuss with me about</Text>
        <Section style={codeBox}>
          <Text
            style={{
              ...confirmationCodeText,
              color: "#08AEEA",
              fontWeight: "bold",
            }}
          >
            {subject}
          </Text>
        </Section>
        <Text style={heroText}>{message}</Text>
        <Text style={text}>
          This mail is sent from{" "}
          <Link
            style={{ fontStyle: "italic" }}
            href="https://tanvirhossain.verce.app"
          >
            Tanvir.dev
          </Link>
          , when you click to directly connected button and send email
        </Text>
        <Section>
          <Row style={footerLogos}>
            <Column style={{ width: "66%" }}>
              <Img
                src="https://res.cloudinary.com/djbcnjkin/image/upload/v1695030251/mqmasrrhqj5ug8bg3hmz.png"
                width="50"
                height="50"
                alt="tanvirhossain.vercel.app"
              />
            </Column>
            <Column>
              <Row>
                <Column>
                  <Link href="https://www.github.com/tanvir1017">
                    <Img
                      src="https://res.cloudinary.com/djbcnjkin/image/upload/v1695033206/hvxauolynwlue9gluybp.png"
                      width="32"
                      height="32"
                      alt="Slack"
                      style={socialMediaIcon}
                    />
                  </Link>
                </Column>
                <Column>
                  <Link href="https://www.linkedin.com/in/tanvir1017">
                    <Img
                      src="https://res.cloudinary.com/djbcnjkin/image/upload/v1695033206/k1kctbqkdxzkfbnyrn78.png"
                      width="32"
                      height="32"
                      alt="Slack"
                      style={socialMediaIcon}
                    />
                  </Link>
                </Column>
                <Column>
                  <Link href="https://www.facebook.com/tanvir1017">
                    <Img
                      src="https://res.cloudinary.com/djbcnjkin/image/upload/v1695033206/ooahbjc2defp99hdwqce.png"
                      width="32"
                      height="32"
                      alt="Slack"
                      style={socialMediaIcon}
                    />
                  </Link>
                </Column>{" "}
                <Column>
                  <Link href="https://www.twitter.com/tanvi1017">
                    <Img
                      src="https://res.cloudinary.com/djbcnjkin/image/upload/v1695033206/lfvw5sn8ttpg6ujczuew.png"
                      width="32"
                      height="32"
                      alt="Slack"
                      style={socialMediaIcon}
                    />
                  </Link>
                </Column>
              </Row>
            </Column>
          </Row>
        </Section>
        <Section>
          <Link
            style={footerLink}
            href="https://tanvirhossain.vercel.app/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Me
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link
            style={footerLink}
            href="https://tanvirhossain.vercel.app/blogs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blogs
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link
            style={footerLink}
            href="https://tanvirhossain.vercel.app/projects"
            target="_blank"
            rel="noopener noreferrer"
          >
            Projects
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Section style={{ marginTop: "20px" }}>
            <Img
              src="https://res.cloudinary.com/djbcnjkin/image/upload/v1695029896/wuo400qfz4yanfv1b6hq.png"
              width="500"
              height="100"
              alt="Slack"
            />
          </Section>
          <Text style={footerText}>
            © Don't wary about this mail i'll not use it for marketing purpose
            or my own purpose. if I do not respond to you in 24 hours that is
            because of some issue made by Gmail. so kindly please, email me
            manually at{" "}
            <Link style={{ fontStyle: "italic" }} href="#">
              tanvir.hossaindev1@gmail.com
            </Link>
            <br />
            <br />
            All rights reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default SlackConfirmEmail;

const footerText = {
  fontSize: "12px",
  color: "#b7b7b7",
  lineHeight: "15px",
  textAlign: "left",
  marginBottom: "50px",
};

const footerLink = {
  color: "#b7b7b7",
  textDecoration: "underline",
};

const footerLogos = {
  marginBottom: "32px",
  paddingLeft: "8px",
  paddingRight: "8px",
  width: "100%",
};

const socialMediaIcon = {
  display: "inline",
  marginLeft: "32px",
};

const main = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
};

const logoContainer = {
  marginTop: "32px",
};

const h1 = {
  color: "#1d1c1d",
  fontSize: "36px",
  fontWeight: "700",
  margin: "30px 0",
  padding: "0",
  lineHeight: "42px",
};

const heroText = {
  fontSize: "20px",
  lineHeight: "28px",
  color: "black",
  marginBottom: "30px",
};

const codeBox = {
  background: "rgb(245, 244, 245)",
  borderRadius: "4px",
  marginRight: "50px",
  marginBottom: "30px",
  padding: "43px 23px",
};

const confirmationCodeText = {
  fontSize: "30px",
  textAlign: "center",
  verticalAlign: "middle",
};

const text = {
  color: "#000",
  fontSize: "14px",
  lineHeight: "24px",
};
