import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Divider, Row } from 'antd';
import Responses from 'components/Responses/Responses';
import { useResponses } from 'hooks';
import { responsesValue } from '../../redux/responses/selectors';
import { qtyValue } from '../../redux/qty/selectors';
import { QtyType, ResponseType } from 'types';

const Boards = (): JSX.Element => {
  const responses: ResponseType[] = useSelector(responsesValue);
  const qty: QtyType = useSelector(qtyValue);
  
  const { isLoading, fetchResponses } = useResponses();

  useEffect(() => {
    if (!responses || !qty) return;
    fetchResponses();
  }, [qty]);

  return (
    <div>
      <Divider orientation="right">Responses</Divider>
        {responses?.length &&
          <Row className="boards__row">
              <Responses
                responses={responses}
                isLoading={isLoading}
              />
          </Row>
        }
    </div>
  );
};

export default Boards;
