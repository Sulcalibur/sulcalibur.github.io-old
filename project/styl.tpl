
.sprite
    font-size: 1em;

.sprite:before
    content: ' ';
    background-image: url("{{{cssPathSvg}}}");
    background-repeat: no-repeat;
    background-size: {{width}}{{units}} {{height}}{{units}};
    display: inline-block;
    {{#cssPathNoSvg}}
    .no-svg &
        background-image: url("{{{cssPathNoSvg}}}");
    {{/cssPathNoSvg}}

{{#sprites}}
.sprite__{{fileName}}:before
    background-position: {{x}}{{units}} {{y}}{{units}};
    width: {{w}}{{units}};
    height: {{h}}{{units}};

{{/sprites}}
