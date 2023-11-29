import React from "react";

export interface CardProps {
  title: string;
  children: any;
}

export function Card({ title, children }: CardProps) {
  return (
    <article>
      <h2 className="text-3xl font-bold underline">{title}</h2>
      {children}
    </article>
  );
}
