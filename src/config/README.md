## Project defaults to be set

**NEW** a `config` directory is now required to feed Doddle Base variables through the compiler. This structure should follow:

- `./src/scss/config/_breakpoints.scss`: to run `@forward '../grid/01_abstracts/breakpoints'`
- `./src/scss/config/_core.scss`: to run `@forward '../grid/01_abstracts/core'`
- `./src/scss/config/_fonts.scss`: to set variable `$primary` and to run `@forward '../grid/01_abstracts/font'`
- `.src/scss/config/_scale.scss`: to run `@forward '../grid/01_abstracts/scale'`

Within each of the above partials, any `!default` declared variable can be overwritten using `with ()` on the forward rule.

In addition to the above a `./src/scss/config/_colours.scss` needs creating with some base colours along with some base fonts. The project will not compile without the following.

### Starting a project
After pulling down Doddle Base move the `config` directory out into your projects scss directory root. This folder will serve as the variable container for base and for your project, allowing you to override variables marked as `!default` in Doddle Base. See `config/_fonts` for an example of overriding default values.