import { useMemo, useState } from "react";

import {
  Board,
  Borders,
  Card,
  ChevronButton,
  Container,
  Content,
} from "./styles";
import { ReactComponent as Chevron } from "../../assets/icons/components/chevron.svg";
import { omit, pick } from "lodash";

interface SliderProps {
  items: Array<any>;
}

export default function Slider({ items }: SliderProps) {
  const [slideSelected, setSlideSelected] = useState<number>(0);
  const [sliderDirection, setSliderDirection] = useState<boolean>(false);
  const lenght = items.length;

  function handleChangeSlideLeft() {
    setSliderDirection(false);
    setSlideSelected((prevState) => prevState - 1);
  }

  function handleChangeSlideRight() {
    setSlideSelected((prevState) => prevState + 1);
    setSliderDirection(true);
  }

  const keysFromArray = useMemo(() => {
    const keys = items.map((key) => Object.keys(key));
    return keys[0];
  }, [items]);

  const images = useMemo(() => {
    const images = items.map((item) => item[keysFromArray[0]]);

    return images.map((url, index) => (
      <Card key={index}>
        <img src={url} />
      </Card>
    ));
  }, [items]);

  const content = useMemo(() => {
    const cards = items.map((item) => ({
      description: item[keysFromArray[1]],
      tools: item[keysFromArray[2]],
    }));
    return cards.map((item) => (
      <>
        <Card>{item.description}</Card>
        <Card>{item.tools}</Card>
      </>
    ));
  }, [items]);

  return (
    <Container>
      <Content>
        <Borders className="chevron-left">
          <ChevronButton
            type="button"
            onClick={handleChangeSlideLeft}
            disabled={slideSelected === 0}
          >
            <Chevron />
          </ChevronButton>
        </Borders>
        <Board direction={sliderDirection}>
          {images.map((image, index) => slideSelected === index && image)}
          {content.map((card, index) => slideSelected === index && card)}
        </Board>
        <Borders className="chevron-right">
          <ChevronButton
            type="button"
            onClick={handleChangeSlideRight}
            disabled={slideSelected === lenght - 1}
          >
            <Chevron />
          </ChevronButton>
        </Borders>
      </Content>
    </Container>
  );
}
