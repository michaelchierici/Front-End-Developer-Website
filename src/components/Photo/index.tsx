import { skillsIcons, SkillsProps } from "../../constants/skills";
import { PhotoProps } from "../../Typings/Photo";

import { Container, Circle, Icon } from "./styles";

export default function Photo({ active = false }: PhotoProps) {
  return (
    <Container>
      <Circle>
        {skillsIcons.map((item: SkillsProps, index: number) => (
          <Icon
            boxShadow={item.color}
            isOpen={active}
            index={item.id}
            key={index}
          >
            <img
              style={{
                transform: `rotate(${item.rotate}deg)`,
              }}
              alt={item.name}
              src={item.icon}
            />
          </Icon>
        ))}
      </Circle>
    </Container>
  );
}
