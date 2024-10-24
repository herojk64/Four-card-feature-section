import { ReactNode } from "react";
import "./card.scss"

interface CardProps {
  children: ReactNode;
  className?:string;
  icon?: string; 
}

export const Card = ({ children , className="",icon }: CardProps) => {
  return (
    <section className={'card__component '+className}>
      {children}
      <img src={icon} alt="icons"/>
    </section>
  )
}
