import "./style.css";
import { USER_1 } from "../../constants";

const { userName, cards, id: userId } = USER_1;
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export const UserPage = () => {
  const supabase = createClient(
    "https://zajkpvxudaioeehbcqah.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inphamtwdnh1ZGFpb2VlaGJjcWFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk3ODgwOTgsImV4cCI6MjAwNTM2NDA5OH0.NleC02I5oY4D9_YnokjEjprc5zOADmSEsgd-s9rnG5Q"
  );
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
  } else {
    return (
      <div className="wrapper">
        <h3>Welcome back {userName}</h3>
        <div className="bank-cards">
          <h6>Linked Cards:</h6>
          <div>
            {cards.map((card) => (
              <div key={card.number} className="bank-card">
                <span>Bank:</span>
                <span>{card.bank}</span>
                <br />
                <span>Number:</span>
                <span>{card.number}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="user-actions">
          <button>Make donation!</button>
          <button>Check donation history</button>
        </div>
      </div>
    );
  }
};
