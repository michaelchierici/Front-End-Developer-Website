import { useState } from "react";

import {
  Board,
  Borders,
  Card,
  ChevronButton,
  Container,
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
          {items.map((project, index) => (
            <>
              {slideSelected === index && (
                <>
                  <Card>{project.photo}</Card>
                  <Card>{project.description}</Card>
                  <Card>{project.tools}</Card>
                </>
              )}
            </>
          ))}
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
