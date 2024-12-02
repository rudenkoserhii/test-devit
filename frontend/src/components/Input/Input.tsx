import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input as AntInput, Button } from 'antd';
import { ValidateStatus } from 'antd/es/form/FormItem';
import { AppDispatch } from 'redux/store';
import { setQty } from '../../redux/qty/slice';
import { resetResponses } from '../../redux/responses/slice';

const EMPTY_STRING = '';

const Input = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const [form] = Form.useForm();
  const [isValid, setIsValid] = useState<boolean | undefined>(undefined);
  const [validateStatus, setValidateStatus] = useState<ValidateStatus>(EMPTY_STRING);

  const onFinish = (values: { index: number }): void => {
    dispatch(setQty(values.index));
    dispatch(resetResponses());

    form.resetFields();
    setIsValid(undefined);
    setValidateStatus(EMPTY_STRING);
  };

  const validateIndex = async (_: unknown, value: number): Promise<void> => {
    if (!value) {
      setIsValid(undefined);
      setValidateStatus(EMPTY_STRING);

      return;
    }
    
    if (isNaN(value)) {
      setIsValid(false);
      setValidateStatus('warning');

      return Promise.reject(
        'Please enter a valid number'
      );
    }

    if (value === 0) {
      setIsValid(false);
      setValidateStatus('warning');

      return Promise.reject(
        'Please enter a value bigger then 0'
      );
    }

    if (value > 100) {
      setIsValid(false);
      setValidateStatus('warning');

      return Promise.reject(
        'Max value is 100'
      );
    }

    setIsValid(true);
    setValidateStatus('success');

    return Promise.resolve();
  };

  return (
    <header>
      <Form form={form} onFinish={onFinish} role="form" layout={'inline'} name="basic">
        <Form.Item
          className="input-one"
          hasFeedback
          name={'index'}
          validateStatus={validateStatus}
          rules={[{ validator: validateIndex }]}
        >
          <AntInput
            className="input-one__input"
            allowClear
            placeholder={'Please enter a number from 1 to 100'}
          />
        </Form.Item>
        <Form.Item>
          <Button
            className="input-one__button"
            type="primary"
            htmlType="submit"
            disabled={!isValid}
          >
            Send Requests
          </Button>
        </Form.Item>
      </Form>
    </header>
  );
};

export default Input;
