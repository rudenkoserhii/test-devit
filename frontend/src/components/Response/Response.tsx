import { Card, Typography } from 'antd';
import { ResponseType } from 'types';

const { Text } = Typography;

const Response = ({ response }: { response: ResponseType }): JSX.Element => {
  const { index } = response;
  return (
    <Card id={index.toString()} className="response">
      <Card.Meta title={index} description={index} />
      <Text>
        {index}
      </Text>
    </Card>
  );
};

export default Response;
