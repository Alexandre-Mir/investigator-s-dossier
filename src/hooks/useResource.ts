// useResource.ts
"use client";

import { useState, useEffect } from "react";

export default function useResource(
  current: number,
  max: number,
  externalOnChange?: (value: number) => void
){
  	const [value, setValue] = useState(current);
    const isDying = value < max / 3;
    const isCritical = value < max / 2;

    useEffect(() => {
		setValue(current);
	}, [current]);

	const updateValue = (newValue: number) => {
		setValue(newValue);
		if (externalOnChange) {
      externalOnChange(newValue);
    }
  };

  return {value, updateValue, isDying, isCritical}
}