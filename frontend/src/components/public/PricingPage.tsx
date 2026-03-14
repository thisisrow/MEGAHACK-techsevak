import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-3.5rem)] bg-gray-50">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-700">Pricing</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Scale your industrial monitoring
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
            Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
          </p>
          
          <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            
            {/* Basic Plan */}
            <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 hover:shadow-lg transition-shadow">
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">Starter</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">Perfect for small workshops and pilot programs.</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">$49</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  <li className="flex gap-x-3"><CheckCircle2 className="h-6 w-5 flex-none text-blue-600" /> Up to 10 Devices</li>
                  <li className="flex gap-x-3"><CheckCircle2 className="h-6 w-5 flex-none text-blue-600" /> Basic Live Monitoring</li>
                  <li className="flex gap-x-3"><CheckCircle2 className="h-6 w-5 flex-none text-blue-600" /> 2 Admin Accounts</li>
                </ul>
              </div>
              <Link
                to="/register"
                className="mt-8 block rounded-md bg-blue-50 px-3 py-2 text-center text-sm font-semibold text-blue-700 hover:bg-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Buy Starter
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="flex flex-col justify-between rounded-3xl bg-blue-900 p-8 ring-1 ring-blue-900 xl:p-10 shadow-xl lg:z-10 relative">
              <div className="absolute top-0 right-6 translate-y-[-50%] bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
                Most Popular
              </div>
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-white">Professional</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-300">Dedicated factories needing full ML scheduling capabilities.</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-white">$199</span>
                  <span className="text-sm font-semibold leading-6 text-gray-300">/month</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300">
                  <li className="flex gap-x-3"><CheckCircle2 className="h-6 w-5 flex-none text-blue-400" /> Up to 50 Devices</li>
                  <li className="flex gap-x-3"><CheckCircle2 className="h-6 w-5 flex-none text-blue-400" /> K-Means ML Scheduling</li>
                  <li className="flex gap-x-3"><CheckCircle2 className="h-6 w-5 flex-none text-blue-400" /> Infinite Operator Accounts</li>
                  <li className="flex gap-x-3"><CheckCircle2 className="h-6 w-5 flex-none text-blue-400" /> Real-time Anomaly Alerts</li>
                </ul>
              </div>
              <Link
                to="/register"
                className="mt-8 block rounded-md bg-blue-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Get started today
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 hover:shadow-lg transition-shadow">
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">Enterprise</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">Massive scale support for mega factories and plants.</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">Custom</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  <li className="flex gap-x-3"><CheckCircle2 className="h-6 w-5 flex-none text-blue-600" /> Unlimited Devices</li>
                  <li className="flex gap-x-3"><CheckCircle2 className="h-6 w-5 flex-none text-blue-600" /> Custom ML Models</li>
                  <li className="flex gap-x-3"><CheckCircle2 className="h-6 w-5 flex-none text-blue-600" /> 24/7 Priority Support</li>
                  <li className="flex gap-x-3"><CheckCircle2 className="h-6 w-5 flex-none text-blue-600" /> Dedicated Firebase Partition</li>
                </ul>
              </div>
              <Link
                to="mailto:sales@powersuraksha.com"
                className="mt-8 block rounded-md bg-white px-3 py-2 text-center text-sm font-semibold text-blue-700 border border-blue-200 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Contact Sales
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
