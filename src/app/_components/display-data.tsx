"use client"
import React, {useEffect} from 'react'
import {ProtocolQueryQuery as ProtocolQuery, ProtocolQueryDocument, execute} from '../../../.graphclient'
const DisplayData = () => {
    const [data, setData] = React.useState<ProtocolQuery>()

  useEffect(() => {
    execute(ProtocolQueryDocument, {}).then((result) => {
      setData(result?.data)
    })
  }, [setData])

  return (
    <>
    <h2>DisplayData</h2>

    <div>
        <fieldset>
          {data && (
            <form>
              <label>Data</label>
              <br />
              <textarea value={JSON.stringify(data, null, 2)} readOnly rows={25} />
            </form>
          )}
        </fieldset>
    </div>
    </>
  )
}

export default DisplayData