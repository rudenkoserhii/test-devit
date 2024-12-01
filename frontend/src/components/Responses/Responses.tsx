import { Card, Col, Spin } from 'antd';
import { nanoid } from 'nanoid';
import Response from 'components/Response/Response';
import { ResponseType } from 'types';

type PropsResponses = {
  responses?: ResponseType[];
  isLoading?: boolean;
};

const Responses = ({
  responses,
  isLoading,
}: PropsResponses): JSX.Element =>  (
    <Col className="responses">
      <Card className="full-width-height">
        <div>
          <ul className='ant-list'>
            {responses?.length &&
              [...responses]
                .map((response) => (
                  <Response key={nanoid()} response={response} />
                ))}
          </ul>
        </div>
        {isLoading && (
          <Spin
            style={{
              margin: '0px auto 0px auto',
              display: 'block',
            }}
          />
        )}
      </Card>
    </Col>
  );

export default Responses;
