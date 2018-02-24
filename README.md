# React Timer Component

## Usage

    import Timer from 'react-timer-component'

    <Timer/>

## Parameters

### startTime (number)

    <Timer startTime={1519498418325} />

Result: `01:27` (mm:ss)

### countDown (bool)

By default, the timer will do a countup. If you want to do a countdown, add this parameter.

    <Timer startTime={1519498418325} countDown />

Result: `240:27` (mmm:ss)

### className (string)

You can customize the class of the timer. By default, it's `timer`.

    <Timer startTime={1519498418325} className={'super-dupper-class'} />