import { GetStaticProps } from "next";
import { FC, ReactElement } from "react";
import { PageBase, PageHead, PolicyPageLayout } from "@/components/layouts";
import { getMDFileContent } from "../lib/file";

interface Props {
  content: string;
}

interface GetLayOutProps {
  page: ReactElement;
}

export const getStaticProps: GetStaticProps = () => {
  const content = getMDFileContent("cookie.md");
  return {
    props: {
      content,
    },
  };
};

const PrivacyPage: FC<Props> & {
  getLayout?: FC<GetLayOutProps>;
} = ({ content }) => {
  return (
    <>
      <PageHead
        pageTitle="Cookie policy | Instill AI"
        pageDescription="Instill AI's privacy policy."
      />
      <PolicyPageLayout content={content} />
    </>
  );
};

PrivacyPage.getLayout = (page) => {
  return <PageBase>{page}</PageBase>;
};

export default PrivacyPage;
