curl \
    -D- \
     -u "a_abd_elhay@live.com:qP58eO0v3stD5Z5rq5Ht0404" \
     -X POST \
     --data '{"fields": {"project":{"key": "SP"},"summary":"$FAILURE_SUMMARY","issuetype": {"name": "Bug"}}}' \
     -H "Content-Type: application/json" \
     https://super-dev.atlassian.net/rest/api/latest/issue/
