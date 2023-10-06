import React from 'react'
import Loading from './Loading';

function Button({ submit, children, disable, className, loading, loadingComponent  }: any) {
  return (
    <button
      disabled={disable}
      onClick={submit}
      type="submit"
      className={className}
    >
      {loading?
        loadingComponent
        :
        children
      }
    </button>
  )
}

export default Button