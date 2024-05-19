import { EpisodesLayout } from "./EpisodesLayout";
import { EpisodesMenu } from "./EpisodesMenu";
import { EpisodesContent } from "./EpisodesContent";
import { useEffect } from "react";
import { redirect } from "react-router-dom";

export const Episodes = () => {
  useEffect(() => {
    redirect("/episodes");
  });

  return (
    <EpisodesLayout sidebar={<EpisodesMenu />}>
      {<EpisodesContent />}
    </EpisodesLayout>
  );
};
