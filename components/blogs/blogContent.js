import Heading from "components/typography/Heading";
import Text from "components/typography/Text";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";

const components = {
  p: (props) => <Text className="" {...props} />,
  h1: (props) => <Heading className="" {...props} />,
  h2: (props) => <Heading className="" {...props} level={2} />,
  h3: (props) => <Heading className="" {...props} level={3} />,
  img: (props) => (
    <span>
      <Image
        className="mx-auto"
        width={800}
        height={100}
        {...props}
        alt={props.alt}
      />
    </span>
  ),
};
export default function BlogContent({ mdxSource }) {
  return (
    <div>
      <MDXRemote components={components} {...mdxSource} />
    </div>
  );
}
