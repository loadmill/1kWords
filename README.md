# 1kWords
A good emoji is worth a thousand words. 

Use this GitHub action to ensure that all PR titles start with an emoji! 

### Example Workflow YML File

Create this file in `.github/workflows/`

```yml
name: "Validate emoji"
on:
  pull_request:
    types: [opened, edited, reopened]

jobs:
  validate-emoji:
    runs-on: ubuntu-latest
    steps:
    
    - name: Pull request title should start with emoji
      uses: loadmill/1kWords@v1.0.5

    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
