import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Divider, Row } from 'antd';
import Column from 'components/Column/Column';
import { useResponses } from 'hooks';
import { getColumnProps } from 'helpers';
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
      <Divider orientation="right">Issues</Divider>
      <Row className="boards__row">
        <Column
          isLoading={isLoading}
          {...getColumnProps(
            columnTitle,
            nextPageToDo,
            toDoIssues,
            backgroundToDo,
            isLoadingToDo,
            nextPageInProgress,
            inProgressIssues,
            backgroundInProgress,
            isLoadingInProgress,
            nextPageDone,
            doneIssues,
            backgroundDone,
            isLoadingDone
          )}
        />
      </Row>
    </div>
  );
};

export default Boards;
