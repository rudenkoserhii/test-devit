import { Card, Typography } from 'antd';
import { ResponseType } from 'types';

const { Text } = Typography;

const Response = ({ response, responseIndex }: { response: ResponseType, responseIndex: number }): JSX.Element => {
  const { index, time } = response;
  return (
    <Card id={responseIndex.toString()} className="response">
      <Card.Meta title={`Response with index ${responseIndex} on Request with index ${index}`} />
      <Text>
       Operation time: {time} ms
      </Text>
    </Card>
  );
};

export default Response;
