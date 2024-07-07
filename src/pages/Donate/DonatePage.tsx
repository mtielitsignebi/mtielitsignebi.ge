// @ts-nocheck
import { Layout } from "../../components/Layout";

export default function DonatePage() {
  return (
    <Layout>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <stripe-buy-button
          buy-button-id="buy_btn_1OeQizCTPBIJAlmiFyLMCagk"
          publishable-key="pk_live_51OeQ08CTPBIJAlmiVX49TicFbpmqb7YPMtnPM69dHeSa19QpWN21k4TYq56ad81z8b2J99vikXdbTTVZykPVOF4J00Owb3dIm9"
        />
      </div>
    </Layout>
  );
}
