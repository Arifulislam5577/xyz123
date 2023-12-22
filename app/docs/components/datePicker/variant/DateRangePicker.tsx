'use client'
import { useState } from 'react'
import { DatePicker } from '../../../../src'
import { rangePicker } from '../../../../src/components/DatePicker/DatePickerContext'

const DateRangePicker = () => {
  const [range, setRangeDate] = useState<rangePicker>()
  console.log(range)
  return (
    <div className="w-1/3">
      <DatePicker rangeDate={setRangeDate} placeholder="Start - Finish">
        <DatePicker.Range />
      </DatePicker>
    </div>
  )
}

const DateRangePickerCode = `
"use client";
import { useState } from "react";
import { DatePicker} from "keep-react";

export const DatePickerComponent = () => {
  const [rangeDate, setRangeDate] = useState(null);
  return (
    <DatePicker rangeDate={setRangeDate} placeholder="Start - Finish">
      <DatePicker.Range />
    </DatePicker>
  );
}
`

export { DateRangePicker, DateRangePickerCode }
