import React from "react";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

export const InputTextEditor = () => {
  return (
    <React.Fragment>
      <GrammarlyEditorPlugin
        clientId={process.env.REACT_APP_GRAMMARLY_CLIENT_ID}
        style={{ width: "100%" }}
      >
        {/* <input type='text' placeholder="What's on your mind today? 😃" /> */}
        <textarea placeholder="What's on your mind today? 😃" />
      </GrammarlyEditorPlugin>
    </React.Fragment>
  );
};
