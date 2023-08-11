import { Suspense, useMemo, useState } from "react";

import {
  Board,
  Card,
  ChevronButton,
  Container,
  ContainerCard,
  Content,
} from "./styles";
import { ReactComponent as Chevron } from "../../assets/icons/components/chevron.svg";
import Loader from "../Loader";

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
          <Suspense fallback={<Loader isLoading={true} />}>
            <img src={item.photo} />
          </Suspense>
        </Card>
      </ContainerCard>
    ));
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
          {slide.map((card, index) => slideSelected === index && card)}
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
