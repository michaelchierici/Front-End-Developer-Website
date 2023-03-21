import { skillsIcons, SkillsProps } from "../../constants/skills";

import { Container, Circle, Icon } from "./styles";

interface PhotoProps {
  active: boolean;
}

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
