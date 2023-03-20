import { useState } from "react";
import { skillsIcons, SkillsProps } from "../../constants/skills";

import { Container, Circle, Icon } from "./styles";

interface PhotoProps {
  active: boolean;
}

export default function Photo({ active }: PhotoProps) {
  return (
    <Container>
      <Circle>
        {skillsIcons.map((item: SkillsProps, index: number) => (
          <Icon isOpen={active} index={item.id} key={index}>
            <img
              style={{
                transform: `rotate(${item.rotate}deg)`,
              }}
              alt={item.name}
              src={item.icon}
              width={50}
              height={50}
            />
          </Icon>
        ))}
      </Circle>
    </Container>
  );
}
