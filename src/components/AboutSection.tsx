const AboutSection = () => {
  return (
    <div className="max-w-2xl mx-auto mb-8 p-6 rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
        About This App
      </h2>
      <p className="text-gray-700 dark:text-gray-300">
        I built this because I was fed up with constantly re-logging into
        Google's console or digging through my app's logs to find fresh tokens.
        Now you can grab Google ID Tokens in one click – no repeated sign-ins,
        no setup headaches. Your token auto-refreshes, and stays right here in
        your browser.
      </p>

      {/* Features List */}
      <div className="mt-4 text-left text-gray-700 dark:text-gray-300">
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
          Key Features:
        </h3>
        <ul className="list-inside space-y-2 list-none">
          <li>
            ✅ <strong>Google Id Token</strong> – Authenticate using your Google
            account and retrieve the ID Token without going through the annoying
            flows on developer console.
          </li>
          <li>
            ✅ <strong>Auto Refresh</strong> – App Automatically refreshes the
            token before it expires.
          </li>
          <li>
            ✅ <strong>jwt.io Style Decoding</strong> – Extract useful details
            like email, expiration time, and user claims.
          </li>

          <li>
            ✅ <strong>Frontend Only</strong> – Your token never leaves the app.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutSection;
