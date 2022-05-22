import { getRequest } from 'api/requests/requests';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ChangeEssence = () => {
  
  const params = useParams();

  useEffect(() => {
    if(params && params.type && params.id) {
      (async function() {
        const res = await getRequest(`/db/${params.type}/${params.id}`);
        console.log(res)
      })();
    }
  }, [params])

  return (
    <div>ChangeEssence</div>
  )
}

export default ChangeEssence;