import { Form, Input } from 'antd';
import {InfoCircleTwoTone, LockTwoTone, MailTwoTone, SmileTwoTone} from '@ant-design/icons';
import {Button, ShadowBox} from '../index'
import {Link} from "react-router-dom";

const RegisterForm = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    let success = false;

    return (
        <>
            <div className="auth__header">
                <h2>Create account</h2>
                <p>Enter your username and password</p>
            </div>
            <ShadowBox>
                {!success ? (
                <Form
                    name="register"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                        hasFeedback
                        validateStatus="success"
                    >
                        <Input
                            prefix={<SmileTwoTone className="site-form-item-icon" />}
                            placeholder="Username"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                        hasFeedback
                        validateStatus="success"
                    >
                        <Input
                            prefix={<MailTwoTone className="site-form-item-icon" />}
                            placeholder="Email"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input
                            prefix={<LockTwoTone className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            size="large"
                        />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                    <Input
                        prefix={<LockTwoTone className="site-form-item-icon" />}
                        type="password"
                        placeholder="Confirm Password"
                        size="large"
                    />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" size="large" htmlType="submit" className="button login-form-button">
                            Log in
                        </Button>
                        Or <Link to="/">Log in now!</Link>
                    </Form.Item>
                </Form> ) : (
                    <div className="auth__success-block">
                        <InfoCircleTwoTone style={{ fontSize: '70px', marginBottom: '20px'}}/>
                        <h3>Verify your account</h3>
                        <p>Email has been sent to your mail with a link to confirm your account</p>
                    </div>

                    )}
            </ShadowBox>
        </>
    );
};

export default RegisterForm;