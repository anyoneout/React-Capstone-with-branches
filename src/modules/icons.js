import React from "react";
import { Flux } from "@lobehub/icons";
import { Dalle } from '@lobehub/icons';
import { OpenAI } from "@lobehub/icons";



export function HomeDalleIcon() {
  return <Dalle.Combine size={50} />;
}

export function HomeFluxIcon() {
  return <Flux.Combine size={50} />;
}
export function ApiOpenAiIcon() {
  return <OpenAI.Text size={65} />;
}
export function ApiDalleIcon() {
  return <Dalle.Combine size={55} />;
}

export function ApiFluxIcon() {
  return <Flux.Combine size={45} />;
}

export function NavDalleIcon() {
  return <OpenAI size={18} />;
}

export function NavFluxIcon() {
  return <Flux size={18} />;
}

export function CarouselDalleIcon() {
  return <OpenAI size={30} />;
}

export function CarouselFluxIcon() {
  return <Flux size={30} />;
}