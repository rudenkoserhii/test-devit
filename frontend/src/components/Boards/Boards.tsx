import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Divider, Row } from 'antd';
import Responses from 'components/Responses/Responses';
import { useResponses } from 'hooks';
import { responsesValue } from 'redux/responses/selectors';

const Boards = (): JSX.Element => {
  const responses = useSelector(responsesValue);

  const { isLoading, fetchResponses } = useResponses();

  useEffect(() => {
    if (!responses) return;
    fetchResponses();
  }, [responses]);

  return (
    <div>
      <Divider orientation="right">Responses</Divider>
      <Row className="boards__row">
        <Responses
          responses={responses}
          isLoading={isLoading}
        />
      </Row>
    </div>
  );
};

export default Boards;
