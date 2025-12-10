// useResource.ts
"use client";

import { useState, useEffect } from "react";

export default function useResource(
  current: number,
  max: number,
  investigatorId: number,
  label: string,
  externalOnChange?: (value: number) => void,
){
  	const [value, setValue] = useState(current);
    const [isInitialized, setIsInitialized] = useState(false);

    const isDying = value < max / 3;
    const isCritical = value < max / 2;
    const investigatorIdType = `investigator-${investigatorId}-${label}`;
    
    useEffect(() => {
      const savedValue = localStorage.getItem(investigatorIdType)
      
      if (savedValue !== null) {
        setValue(Number(savedValue))
      } else {setValue(current)}
      setIsInitialized(true)
    },[investigatorIdType, current, setIsInitialized])

    useEffect(() => {

      if (isInitialized) {
        localStorage.setItem(investigatorIdType, value.toString())
      }
      
    }, [value, investigatorIdType, isInitialized])


	const updateValue = (newValue: number) => {
		setValue(newValue);
		if (externalOnChange) {
      externalOnChange(newValue);
    }
  };

  return {value, updateValue, isDying, isCritical, isInitialized}
}