(() => {
    const { WidgetType, Decoration, ViewPlugin } = require("@codemirror/view");
    const { syntaxTree } = require("@codemirror/language");
    class CheckboxWidget extends WidgetType {
        constructor(checked) {
            super();
            this.checked = checked;
        }

        eq(other) { return other.checked == this.checked }

        toDOM() {
            let wrap = document.createElement("span")
            wrap.setAttribute("aria-hidden", "true")
            wrap.className = "cm-boolean-toggle"
            let box = wrap.appendChild(document.createElement("input"))
            box.type = "checkbox"
            box.className = 'form-check-input'
            box.style.margin = '.125rem';
            box.style.setProperty('--thiscolor', '#a497dc')
            box.checked = this.checked
            return wrap
        }

        ignoreEvent() { return false }
    }


    function checkboxes(view) {
        let widgets = []
        for (let { from, to } of view.visibleRanges) {
            syntaxTree(view.state).iterate({
                enter: (node) => {
                    //console.log(node.name,node)
                    if (node.name == "BooleanLiteral") {
                        let isTrue = view.state.doc.sliceString(node.from, node.to) == "true"
                        //console.log(isTrue, "vvv")
                        let deco = Decoration.widget({
                            widget: new CheckboxWidget(isTrue),
                            side: 1
                        })
                        widgets.push(deco.range(node.from))
                    }
                },
                from,
                to
            })
        }
        return Decoration.set(widgets)
    }

    const checkboxPlugin = ViewPlugin.fromClass(class {
        constructor(view) {
            this.decorations = checkboxes(view);
        }
        update(update) {
            if (update.docChanged || update.viewportChanged)
                this.decorations = checkboxes(update.view);
        }
    }, {
        decorations: v => v.decorations,
        eventHandlers: {
            mousedown: (e, view) => {
                let target = e.target;
                if (target.nodeName == "INPUT" &&
                    target.parentElement.classList.contains("cm-boolean-toggle"))
                    return toggleBoolean(view, view.posAtDOM(target));
            }
        }
    });
    function toggleBoolean(view, pos) {
        let before = view.state.doc.sliceString(Math.max(0, pos), pos + 5)
        let change
        //console.log(before)
        if (before == "false") {
            change = { from: pos, to: pos + 5, insert: "true" }

        }
        else if (before.startsWith("true"))
            change = { from: pos, to: pos + 4, insert: "false" }
        else
            return false
        view.dispatch({ changes: change })
        return true
    }
    require.addMod("@Fe2/tooltip", { checkboxPlugin });
})();