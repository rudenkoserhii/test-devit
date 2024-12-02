import { Card, Typography } from 'antd';
import { useEffect, useRef, memo } from 'react';
import { ResponseType } from 'types';

const { Text } = Typography;

const Response = memo(({ response, responseIndex }: { response: ResponseType, responseIndex: number }): JSX.Element => {
  const myRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    myRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [response]);

  const { index, time } = response;
  return (
    <Card ref={myRef} id={responseIndex.toString()} className="response">
      <Card.Meta title={`Response with index ${responseIndex} on Request with index ${index}`} />
      <Text>
       Operation time: {time} ms
      </Text>
    </Card>
  );
});

export default Response;
