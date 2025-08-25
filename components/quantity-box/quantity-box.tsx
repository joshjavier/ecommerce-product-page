'use client'

import {
  forwardRef,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { NumericFormat, NumericFormatProps } from 'react-number-format'
import IconMinus from '@/assets/images/icon-minus.svg'
import IconPlus from '@/assets/images/icon-plus.svg'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

interface QuantityBoxProps
  extends Omit<NumericFormatProps, 'value' | 'onValueChange'> {
  stepper?: number
  thousandSeparator?: string
  placeholder?: string
  defaultValue?: number
  min?: number
  max?: number
  value?: number // Controlled value
  suffix?: string
  prefix?: string
  onValueChange?: (value: number | undefined) => void
  fixedDecimalScale?: boolean
  decimalScale?: number
}

export const QuantityBox = forwardRef<HTMLInputElement, QuantityBoxProps>(
  function QuantityBox(
    {
      stepper,
      thousandSeparator,
      placeholder,
      defaultValue,
      min = 0,
      max = Infinity,
      onValueChange,
      fixedDecimalScale = false,
      decimalScale = 0,
      suffix,
      prefix,
      value: controlledValue,
      ...props
    },
    ref,
  ) {
    const internalRef = useRef<HTMLInputElement>(null)
    const combinedRef = ref || internalRef
    const [value, setValue] = useState(controlledValue ?? defaultValue)

    const handleIncrement = useCallback(() => {
      setValue((prev) =>
        prev === undefined
          ? (stepper ?? 1)
          : Math.min(prev + (stepper ?? 1), max),
      )
    }, [stepper, max])
    const handleDecrement = useCallback(() => {
      setValue((prev) =>
        prev === undefined
          ? -(stepper ?? 1)
          : Math.max(prev - (stepper ?? 1), min),
      )
    }, [stepper, min])

    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (
          document.activeElement ===
          (combinedRef as RefObject<HTMLInputElement>).current
        ) {
          if (e.key === 'ArrowUp') {
            handleIncrement()
          } else if (e.key === 'ArrowDown') {
            handleDecrement()
          }
        }
      }

      window.addEventListener('keydown', handleKeyDown)

      return () => {
        window.removeEventListener('keydown', handleKeyDown)
      }
    }, [handleIncrement, handleDecrement, combinedRef])

    useEffect(() => {
      if (controlledValue !== undefined) {
        setValue(controlledValue)
      }
    }, [controlledValue])

    const handleChange = (values: {
      value: string
      floatValue: number | undefined
    }) => {
      const newValue =
        values.floatValue === undefined ? undefined : values.floatValue
      setValue(newValue)
      if (onValueChange) {
        onValueChange(newValue)
      }
    }

    const handleBlur = () => {
      if (value === undefined || value < min) {
        setValue(min)
        ;(combinedRef as RefObject<HTMLInputElement>).current.value =
          String(min)
      } else if (value > max) {
        setValue(max)
        ;(combinedRef as RefObject<HTMLInputElement>).current.value =
          String(max)
      }
    }

    return (
      <div className="flex h-700 min-w-[157px] items-center justify-between rounded-[10px] bg-grey-50 transition-shadow focus-within:ring-[3px] focus-within:ring-ring/50">
        <Button
          disabled={value === min}
          onClick={handleDecrement}
          variant="secondary"
          size="icon"
          className="h-full w-[39px] cursor-pointer rounded-e-none bg-transparent text-orange-500 shadow-none hover:bg-transparent hover:text-orange-300"
          tabIndex={-1}
          aria-hidden="true"
        >
          <IconMinus className="size-3" aria-hidden="true" />
        </Button>
        <NumericFormat
          role="spinbutton"
          value={value}
          onValueChange={handleChange}
          thousandSeparator={thousandSeparator}
          decimalScale={decimalScale}
          fixedDecimalScale={fixedDecimalScale}
          allowNegative={min < 0}
          valueIsNumericString
          onBlur={handleBlur}
          max={max}
          min={min}
          suffix={suffix}
          prefix={prefix}
          customInput={Input}
          placeholder={placeholder}
          className="h-full w-full [appearance:textfield] rounded-none border-none text-center text-preset-3 font-bold focus-visible:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          getInputRef={combinedRef}
          {...props}
        />
        <Button
          disabled={value === max}
          onClick={handleIncrement}
          variant="secondary"
          size="icon"
          className="h-full w-[39px] cursor-pointer rounded-s-none bg-transparent text-orange-500 shadow-none hover:bg-transparent hover:text-orange-300"
          tabIndex={-1}
          aria-hidden="true"
        >
          <IconPlus className="size-3" aria-hidden="true" />
        </Button>
      </div>
    )
  },
)
