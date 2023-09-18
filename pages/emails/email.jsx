// import { Button } from "@react-email/button";
// import { Tailwind } from "@react-email/tailwind";

// const Email = () => {
//   return (
//     <Tailwind
//       config={{
//         darkMode: "class",
//         theme: {
//           container: {
//             center: true,
//             padding: "2rem",
//             screens: {
//               "2xl": "1400px",
//             },
//           },
//           extend: {
//             fontFamily: {
//               // used for subtitle
//               caveatSemiBold: "CaveatSemiBold",

//               // Globally use
//               firaSansRegular: "FiraSansRegular",
//               firaSansItalic: "FiraSansItalic",
//               firaSansLight: "FiraSansLight",
//               firaSansLightItalic: "FiraSansLightItalic",
//               firaSansExtraLight: "FiraSansExtraLight",
//               firaSansExtraLightItalic: "FiraSansExtraLightItalic",
//               firaSansMedium: "FiraSansMedium",
//               firaSansMediumItalic: "FiraSansMediumItalic",
//               firaSansSemiBold: "FiraSansSemiBold",
//               firaSansSemiBoldItalic: "FiraSansSemiBoldItalic",
//               firaSansBold: "FiraSansBold",
//               firaSansBoldItalic: "FiraSansBoldItalic",
//               firaSansExtraBold: "FiraSansExtraBold",
//               firaSansExtraBoldItalic: "FiraSansExtraBoldItalic",
//               firaSansBlack: "FiraSansBlack",
//               firaSansBlackItalic: "FiraSansBlackItalic",

//               // Stroke font for heading & title
//               poppinsBold: "PoppinsBold",
//               poppinsBoldItalic: "PoppinsBoldItalic",
//               poppinsBlack: "PoppinsBlack",
//               poppinsBlackItalic: "PoppinsBlackItalic",
//               poppinsExtraBold: "PoppinsExtraBold",
//               poppinsExtraBoldItalic: "PoppinsExtraBoldItalic",
//             },
//           },
//         },
//       }}
//     >
//       <div className="app">
//         <p>Hello</p>
//         <Button
//           href="https://example.com"
//           className="px-3 py-2 font-medium leading-4 text-white"
//         >
//           Click me
//         </Button>
//       </div>
//     </Tailwind>
//   );
// };
// export default Email;

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from "@react-email/components";

export const Email = ({ name, subject }) => (
  <Html>
    <Head />
    <Preview>Thanks for sharing your interest</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Hey {name}! 👋</Heading>
        <Text>Thanks for sharing your interest for {subject}</Text>

        {/* <Text
          style={{
            ...text,
            color: "#ababab",
            marginTop: "14px",
            marginBottom: "16px",
          }}
        >
        </Text> */}
        {/* <Text
          style={{
            ...text,
            color: "#ababab",
            marginTop: "12px",
            marginBottom: "38px",
          }}
        >
          Hint: You can set a permanent password in Settings & members → My
          account.
        </Text> */}
        <Img src="/author/emailfooter.png" alt="Footer logo" />
        <Text style={footer}>
          <Link
            href="https://tanvirhossain.vercel.app"
            target="_blank"
            style={{ ...link, color: "#898989" }}
          >
            tanvir.dev
          </Link>
        </Text>
      </Container>
    </Body>
  </Html>
);

export default Email;

const main = {
  maxWidth: "1152px",
  margin: "0 auto",
  backgroundColor: "#ffffff",
  border: "1px solid tomato",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const footer = {
  color: "#898989",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};

const code = {
  display: "inline-block",
  padding: "16px 4.5%",
  width: "90.5%",
  backgroundColor: "#f4f4f4",
  borderRadius: "5px",
  border: "1px solid #eee",
  color: "#333",
};
