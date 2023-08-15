import { useMemo, useState } from "react";

import {
  Board,
  Card,
  ChevronButton,
  Container,
  ContainerCard,
  Content,
} from "./styles";
import { ReactComponent as Chevron } from "../../assets/icons/components/chevron.svg";

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

  const slide = useMemo(() => {
    const cards = items.map((item) => {
      const key = Object.keys(item);
      const [photo, description, tools] = key;
      const card = {
        photo: item[photo],
        description: item[description],
        tools: item[tools],
      };
      return card;
    });

    return cards;
  }, [items]);

  return (
    <Container>
      <div className="chevron-left">
        <ChevronButton
          type="button"
          onClick={handleChangeSlideLeft}
          disabled={slideSelected === 0}
        >
          <Chevron />
        </ChevronButton>
      </div>
      <Content>
        <Board direction={sliderDirection}>
          {slide.map(
            (card, index) =>
              slideSelected === index && (
                <ContainerCard key={index}>
                  <Card>
                    <img src={card.photo} />
                  </Card>
                </ContainerCard>
              )
          )}
        </Board>
      </Content>
      <div className="chevron-right">
        <ChevronButton
          type="button"
          onClick={handleChangeSlideRight}
          disabled={slideSelected === lenght - 1}
        >
          <Chevron />
        </ChevronButton>
      </div>
    </Container>
  );
}
