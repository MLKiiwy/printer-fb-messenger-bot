# Contributing

Contributions are welcome, here some guidelines following common principles.

## Git Workflow

Currently we use a simple [Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#feature-branch-workflow), where all changes are made in feature branches which are then pull requested into master. Each pull request must be assigned to the team, and reviewed by at least one person, ideally more. If the changes are significant, then the reviewer should be someone who is experienced or knows the project well. Once they are merged, changes are automatically deployed to staging.

## Branches

Branches should be named for the feature they implement. For example `font-ux` or `theme-model`. Ideally it shouldn't include more than two or three words.

## Commits

Write [good semantic commit messages](http://karma-runner.github.io/0.10/dev/git-commit-msg.html). For example:

```
docs(contributing): add documentation for contribution standards
```

## Pull Requests

Before you make a pull request, ensure that your tests and linter pass and that you have no conflicts with master. All changed code should include relevant tests or it should not be merged.

If your pull request is a work in progress, please add the `work in progress` label. If it is blocked by another project that needs changes, then please add `merge-blocked`. Anything in master should be able to be deployed. In both of these cases, the pr should not be merged until the label can be removed.
