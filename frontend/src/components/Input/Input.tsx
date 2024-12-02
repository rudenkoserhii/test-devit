import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input as AntInput, Button } from 'antd';
import { SnippetsOutlined } from '@ant-design/icons';
import { ValidateStatus } from 'antd/es/form/FormItem';
import { AppDispatch } from 'redux/store';
import { setQty } from '../../redux/qty/slice';

const Input = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const [form] = Form.useForm();
  const [isValid, setIsValid] = useState<boolean | undefined>(undefined);
  const [validateStatus, setValidateStatus] = useState<ValidateStatus>('');

  const onFinish = (values: { index: number }): void => {
    dispatch(setQty(values.index));

    form.resetFields();
    setIsValid(undefined);
    setValidateStatus('');
  };

  const validateIndex = async (_: unknown, value: number): Promise<void> => {
    if (!value) {
      setIsValid(undefined);
      setValidateStatus('');

      return;
    }
    
    if (isNaN(value)) {
      setIsValid(false);
      setValidateStatus('error');

      return Promise.reject(
        'Please enter a valid index'
      );
    }
    setIsValid(true);
    setValidateStatus('success');

    return Promise.resolve();
  };

  const suffix = (
    <SnippetsOutlined
      title="Paste"
      onClick={() =>
        navigator.clipboard.readText().then((text) => {
          form.setFieldsValue({ url: text });
          form.validateFields();
        })
      }
      style={{
        fontSize: 16,
        color: '#00b96b',
      }}
    />
  );

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
            suffix={suffix}
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
