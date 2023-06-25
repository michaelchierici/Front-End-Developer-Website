import { useMemo, useState } from "react";

import {
  Board,
  Borders,
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

  const keysFromArray = useMemo(() => {
    const keys = items.map((key) => Object.keys(key));
    return keys[0];
  }, [items]);

  const slide = useMemo(() => {
    const cards = items.map((item) => ({
      photo: item[keysFromArray[0]],
      description: item[keysFromArray[1]],
      tools: item[keysFromArray[2]],
    }));
    return cards.map((item, index) => (
      <ContainerCard key={index}>
        <Card>
          <img src={item.photo} />
        </Card>
        <Card>
          <h2>{item.description}</h2>
        </Card>
        <Card className="card-tools">
          <h1>Tecnologias utilizadas</h1>
          <img style={{ width: "250px", height: "250px" }} src={item.tools} />
        </Card>
      </ContainerCard>
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
          {slide.map((card, index) => slideSelected === index && card)}
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
