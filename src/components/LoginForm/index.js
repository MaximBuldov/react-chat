import { Form, Input } from 'antd';
import {LockTwoTone, SmileTwoTone} from '@ant-design/icons';
import {Button, ShadowBox} from '../index'
import {Link} from "react-router-dom";

const LoginForm = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <>
            <div className="auth__header">
                <h2>Log in to your account </h2>
                <p>Enter your username and password</p>
            </div>
            <ShadowBox>
                <Form
                    name="normal_login"
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
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockTwoTone className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            size="large"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" size="large" htmlType="submit" className="button login-form-button">
                            Log in
                        </Button>
                        Or <Link to="/signup">register now!</Link>
                    </Form.Item>
                </Form>
            </ShadowBox>
        </>
    );
};

export default LoginForm;