import React, { useRef, useEffect } from "react";
import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles"
import ChannelMessage, { Mention } from "../channelMessage";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }

  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(20).keys()).map((e) => (
          <ChannelMessage
            key={e}
            author="PedrozdR"
            date="21/05/2020"
            content="Olá familia!"
          />
        ))}

        <ChannelMessage
          author="Ibrahim"
          date="21/05/2020"
          content={
            <>
              <Mention>@Pedrozdr </Mention>, você disse... valorant?
            </>
          }
          hasMention
          isBot
        />
      </Messages>
      <InputWrapper >
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData;