import React from "react";
import SookButton from "./lib/Buttons";
import SookCard from "./lib/Cards";
import SookGrid from "./lib/Grids";
import SookFlex from "./lib/Flex";

function App() {
  return (
    <SookFlex
      justify="center"
      item="center"
      customStyle={{
        height: "100vh",
        padding: "50px",
        boxSizing: "border-box",
      }}
      gap={50}
    >
      <div className="App" style={{ display: "flex", gap: "20px" }}>
        <SookButton theme="light" size="xs" onClick={() => console.log("hihi")}>
          안녕하슈
        </SookButton>
        <SookButton
          theme="outline"
          size="xs"
          onClick={() => console.log("hihi")}
        >
          안녕하슈
        </SookButton>
        <SookButton
          customStyle={{ background: "pink", color: "#fff" }}
          size="sm"
          onClick={() => console.log("hihi")}
        >
          안녕하슈
        </SookButton>
        <SookButton theme="error" size="md" onClick={() => console.log("hihi")}>
          안녕하슈안녕하슈안녕하슈
        </SookButton>
        <SookButton
          theme="warning"
          size="lg"
          onClick={() => console.log("hihi")}
        >
          안녕하슈안녕하슈안녕하슈안녕하슈안녕하슈안녕하슈
        </SookButton>
      </div>
      <SookGrid col="repeat(4, 1fr)" gap={20}>
        <SookCard title="타이틀입니당탕타이틀입니당탕타이틀입니당탕">
          안녕하슈안녕하슈안녕하슈안녕하슈안녕하슈안녕하슈
        </SookCard>
        <SookCard onClick={() => console.log("click!")}>
          Lorem ipsum dolonctio quisquam illum blanditiis saepe dolorem
          consequatur nam perferendis, libero optio corrupti labore atque.
        </SookCard>
        <SookCard>
          Lorem ipsum dolonctio quisquam illum blanditiis saepe dolorem
          consequatur nam perferendis, libero optio corrupti labore atque.
        </SookCard>
        <SookCard>
          Lorem ipsum dolonctio quisquam illum blanditiis saepe dolorem
          consequatur nam perferendis, libero optio corrupti labore atque.
        </SookCard>
      </SookGrid>
    </SookFlex>
  );
}

export default App;
