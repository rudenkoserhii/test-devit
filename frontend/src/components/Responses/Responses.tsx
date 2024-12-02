import { Card, Col, Spin } from 'antd';
import Response from 'components/Response/Response';
import { ResponseType } from 'types';
import { memo } from 'react';

type PropsResponses = {
  responses?: ResponseType[];
  isLoading?: boolean;
};

const NEXT_ELEMENT = 1;

const MemoResponse = memo(Response);

const Responses = ({
  responses,
  isLoading,
}: PropsResponses): JSX.Element => (
    <Col className="responses">
      <Card className="full-width-height">
        <div>
          <ul className='ant-list'>
            {responses?.length &&
              [...responses]
                .map((response, index) => (
                  <MemoResponse key={index} response={response} responseIndex={index + NEXT_ELEMENT} />
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
