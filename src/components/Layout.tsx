import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from '@/components';

import { Routing } from '@/constants';

import { userState } from '@/state';

const links = [
	{
		to: Routing.LOGIN,
		text: 'Login'
	},
	{
		to: Routing.REGISTER,
		text: 'Sign Up'
	}
];

export function Layout() {
	const Home = lazy(() => import('@/pages/Home'));
	const Login = lazy(() => import('@/pages/Login'));
	const Register = lazy(() => import('@/pages/Register'));
	const Todo = lazy(() => import('@/pages/Todo'));

	const user = userState((state) => state.user);

	return (
		<Suspense fallback={''}>
			<BrowserRouter>
				<Header links={!user ? links : undefined} />
				<Routes>
					<Route path="*" element={user ? <Todo /> : <Home />} />
					{user ? null : (
						<>
							<Route path={Routing.LOGIN} element={<Login />} />
							<Route
								path={Routing.REGISTER}
								element={<Register />}
							/>
						</>
					)}
				</Routes>
			</BrowserRouter>
		</Suspense>
	);
}
